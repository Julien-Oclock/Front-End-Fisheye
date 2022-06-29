export default class Photographer {

    constructor(data){
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._portait = data.portrait;
        this._path = `./assets/photographers/${this._portrait}`;

    }

    get name() {
        return this._name;
    }
    
    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get tagline() {
        return this._tagline;
    }

    get portrait() {
        return this._portrait;
    }

    get pathPortrait() {
        return this._pathPortrait;
    }
}