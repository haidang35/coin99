import { onValue, ref } from "firebase/database";
import { realtimeDb } from "../../../../Configs/firebase";

const PATH_ENDPOINT = {
    COINLIST_BINANCE: 'coins/binance'
}

class FirebaseService {
    constructor() {
        if(FirebaseService._instance) {
            return FirebaseService._instance;
        }
        FirebaseService._instance = this;
    }

    async subcribeCoinListChangePriceBinance() {
        const coinListRef = ref(realtimeDb, PATH_ENDPOINT.COINLIST_BINANCE);
        let coinListConverted = [];
        onValue(coinListRef, (snapshot) => {
            snapshot.forEach((snapshotChild) => {
                coinListConverted.push(snapshotChild.val());
            });
        });
        return coinListConverted;
    }

}

const firebaseService = new FirebaseService();
export default firebaseService;