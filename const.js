const startText = `
<b>⚡ Привет, для генерации пароля введи /password или нажми на кнопку "Генерировать"</b>
`

const helpText = `
<b>📌 Список команд:</b>

/start - запуск бота
/help - список команд
/password - сгенерировать пароль
`

const passLenText = `
<b>⚙️ Введи длину пароля:</b>
`

const passLenMinText = `
<b>⛔ Длина пароля слишком маленькая, пароль должен состоять минимум из <code>6</code> символов</b>
`

const passLenMaxText = `
<b>⛔ Длина пароля слишком большая, пароль должен состоять максимум из <code>32</code> символов</b>
`

module.exports.helpText = helpText;
module.exports.startText = startText;
module.exports.passLenText = passLenText;
module.exports.passLenMinText = passLenMinText;
module.exports.passLenMaxText = passLenMaxText;