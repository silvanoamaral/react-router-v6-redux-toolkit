# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)

## Estrutura

Redux-Saga ao exemplo de React 18 com Redux, react-router-dom v6, e redux-first-history.

### Estrutura de Pastas

```plaintext
src/
|-- pages/
|   |-- Home.js
|   |-- About.js
|-- redux/
|   |-- store.js
|   |-- rootReducer.js
|   |-- rootSaga.js
|-- |-- history.js
|-- App.js
|-- index.js
```

### Explicação

1. **Histórico do Navegador:**

   - `history.js` cria o contexto do histórico de navegação usando `createReduxHistoryContext` do `redux-first-history`.

2. **Configuração do Redux Store:**

   - `store.js` configura a store do Redux, incluindo o middleware do `redux-first-history` e `redux-saga`.
   - O middleware do Redux-Saga é adicionado junto com o middleware do router.

3. **Combinação de Redutores:**

   - `rootReducer.js` combina os outros redutores da aplicação. O redutor do router é adicionado diretamente na configuração da store em `store.js`.

4. **Saga de Roteamento:**

   - `rootSaga.js` define uma saga que monitora mudanças de localização usando `redux-first-history` e despacha ações conforme necessário.
   - `handleLocationChange` pode conter lógica adicional a ser executada quando a localização muda.

5. **App Component:**

   - `App.js` utiliza `HistoryRouter` do `redux-first-history/rr6` para gerenciar as rotas com o histórico sincronizado ao Redux.
   - `Routes` e `Route` são componentes de `react-router-dom v6` para definir as rotas.

6. **Provider e Renderização:**
   - `index.js` envolve a aplicação com o `Provider` do Redux e renderiza o componente `App` utilizando `ReactDOM.createRoot` para compatibilidade com React 18.

###

Com essa configuração, conseguimos integrar Redux-Saga com Redux, react-router-dom v6, e `redux-first-history`, garantindo que o estado do router seja sincronizado com a store Redux e que a aplicação possa responder a mudanças de localização usando sagas. Isso oferece uma solução robusta e extensível para gerenciar o estado da navegação em uma aplicação React 18.
