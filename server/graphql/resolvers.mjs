import moment from 'moment';
import StellarSdk from 'stellar-sdk';

export default {
    Query: {
        test: () => 'Testing...',
        rate: (_, args, context, info) => {
            const assetInfo = (asset) =>
                this.server
                    .assets(this.state.url)
                    .forCode(asset)
                    .call();
            let buyAsset = await assetInfo(buy);
            let sellAsset = await assetInfo(sell);

            const base =
                buy == 'XLM'
                    ? new StellarSdk.Asset(buyAsset.records[0].asset_code, null)
                    : new StellarSdk.Asset(
                          buyAsset.records[0].asset_code,
                          buyAsset.records[0].asset_issuer
                      );

            const counter =
                sell == 'XLM'
                    ? new StellarSdk.Asset(
                          sellAsset.records[0].asset_code,
                          null
                      )
                    : new StellarSdk.Asset(
                          sellAsset.records[0].asset_code,
                          sellAsset.records[0].asset_issuer
                      );

            const resolution = 60000;
            const start = moment()
                .utc(Date.now())
                .subtract(24, 'hours')
                .valueOf();
            const end = moment()
                .utc(Date.now())
                .valueOf();
            const aggregations = this.server.tradeAggregation(
                base,
                counter,
                start,
                end,
                resolution
            );
            this.state.query = (await aggregations
                .order('asc')
                .limit(1)
                .call()).records;
        }
    }
};
