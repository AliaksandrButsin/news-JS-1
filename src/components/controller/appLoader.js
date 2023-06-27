import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '87da412c6f5f44269f85b8ad39158ebc', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
