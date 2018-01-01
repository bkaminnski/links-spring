export default class UniqueIds {
    constructor() {
        this.uniqueIds = [];
        this.callbacksWhenIdsAreAvailable = [];
        this.loading = false;
        this.loadUniqueIds();
    }

    loadUniqueIds() {
        if (this.loading == false) {
            this.loading = true;
            HttpClient
                .sendGet('/unique-ids-service/uniqueIds')
                .then(uniqueIds => {
                    if (uniqueIds.status == 200) {
                        this.whenLoaded(uniqueIds.jsonObject);
                    }
                })
                .catch(() => this.loading = false);
        }
    }

    withNext(callback) {
        if (this.uniqueIds.length > 0 && this.loading == false) {
            callback(this.uniqueIds.pop());
        } else {
            this.callbacksWhenIdsAreAvailable.push(callback);
        }

        if (this.uniqueIds.length == 0) {
            this.loadUniqueIds();
        }
    }

    whenLoaded(uniqueIds) {
        this.uniqueIds = this.uniqueIds.concat(uniqueIds);
        this.runCallbacks();
        this.loading = false;
        if (this.uniqueIds.length == 0) {
            this.loadUniqueIds();
        }
    }

    runCallbacks() {
        while (this.uniqueIds.length > 0 && this.loading == true && this.callbacksWhenIdsAreAvailable.length > 0) {
            let callback = this.callbacksWhenIdsAreAvailable.shift();
            callback(this.uniqueIds.pop());
        }
    }
}