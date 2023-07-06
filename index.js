const { Telegraf, Markup } = require('telegraf');
const text = require('./const');
const pass = require('./password');

require('dotenv').config()
const bot = new Telegraf('6398373321:AAG1WMobcr9xD8Z2KKEqzHo3ux_MbvCxxVc');


// Обработка команд "/start" и "/help"
bot.start((ctx) => {
    ctx.replyWithHTML( text.startText, Markup.keyboard(['🔐 Генерировать']).resize() );
});
bot.help((ctx) => ctx.replyWithHTML(text.helpText));

// Обработка команды "/password"
bot.command('password', async (ctx) => {
    await passwordGen(ctx);
});

// Обработка нажатия на кнопку "Генерировать"
bot.hears('🔐 Генерировать', async (ctx) => {
    await passwordGen(ctx);
});

// Функция для генерации пароля
const passwordGen = async (ctx) => {
    await ctx.replyWithHTML(text.passLenText);

    bot.hears(/\d+/, async (ctx) => {
        const passLength = parseInt(ctx.message.text);

        if (passLength < 5) {
            await ctx.replyWithHTML(text.passLenMinText);
        } else if (passLength > 32) {
            await ctx.replyWithHTML(text.passLenMaxText);
        } else {
            await ctx.replyWithHTML(`<b>🔐 Вот твой пароль:</b> <code>${pass.generateRandomPass(passLength)}</code>`);
        }
    });
}

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
