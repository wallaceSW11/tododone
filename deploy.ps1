# Limpando build anterior, caso exista
Remove-Item .\css\ -Recurse -Force
Remove-Item .\js\ -Recurse -Force
Remove-Item .\img\ -Recurse -Force
Remove-Item .\favicon.ico -Force
Remove-Item .\index.html -Force

# Restaurando depend�ncias
yarn install

# Gerando os arquivos
yarn build

# Copiando os arquivos da pasta dist para a pasta atual
Move-Item -Path .\dist\** -Destination .
