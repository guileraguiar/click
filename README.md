# Pequeno Guia do Expo
Expo é uma ferramenta utilizada para o React Native.

* Expo Documentação - https://docs.expo.io/

* Expo Dev - https://expo.io/

* Expo na Apple Store - https://apps.apple.com/br/app/expo-client/id982107779

* Expo na Google Plat - https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US

# Etapas para testar o app
para testar sem precisar buildar um apk, apenas baixe o app Expo que está presente pra Android e iOS. com o app baixado, note que, ao realizar o npm start (debugando o app), irá abrir uma página no seu navegador e junto um QR Code. 

* no iphone, abra a câmera e foque no QR Code para ver o resultado.

* no android, abra o app e clique no ícone do QR Code e foque no QR Code da página do seu navegador.
  

## 1. Instalando o CLI (padrão react)
```
npm install --global expo-cli
```

## 2. Debugando
```
npm start
```

## 3. Buildando o .apk (Android)
```
expo build:android -t apk
```

## 3.1 Rodando o .apk direto no celular (necessário estar plugado no USB)
```
adb install app-filename.apk
```

## 4. Rodando a build no Apple TestFlight (iOS)
por se tratar de iOS, tem muita coisa a ser feita. o vídeo apresentado pelo Diego da Rocketseat, mostra certinho os passos para buildar o app para iOS.

* https://youtu.be/wYMvzbfBdYI?t=958  (minuto 16:00)

* https://developer.apple.com/

* https://developer.apple.com/testflight/
