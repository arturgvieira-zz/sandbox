import rp from 'request-promise';

export default {
    Query: {
        test: () => 'Testing...',
        rate: async (_, args, context, info) => {
            const requestOptions = {
                method: 'GET',
                uri:
                    'https://pro-api.coinmarketcap.com/v1/tools/price-conversion',
                qs: {
                    amount: args.amount,
                    symbol: args.sell,
                    convert: args.buy
                },
                headers: {
                    'X-CMC_PRO_API_KEY': '266cb931-ef72-4748-81ff-c73e6bfc74aa'
                },
                json: true,
                gzip: true
            };

            return rp(requestOptions)
                .then((response) => {
                    return JSON.parse(response);
                })
                .catch((err) => {
                    console.log('API call error:', err.message);
                });
        }
    }
};
