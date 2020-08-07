const { sequelize } = require("../db/models");
const { Op } = require("sequelize");

const ResponseFormat = require("../core").ResponseFormat;
const security = require('../db/models').security;
const daily_price = require('../db/models').daily_price;

module.exports = {
    async getTickers(req, res) {
        try {
            const data = await security.findAll({
                attributes: [
                    [sequelize.literal("ticker"), 'label'],
                    [sequelize.literal("id"), 'value'],
                    "name", "sector"
                ],
                // where: {
                //     [Op.and]: [
                //         sequelize.literal(

                //         )
                //     ]
                // }
            });

            res
                .status(201)
                .json(ResponseFormat.build(data, "Get all Tickers", 201, "success"));
        } catch (error) {
            console.log(error);
            res.status(500).json(ResponseFormat.build(error, "Internal server error", 500, "error"));
        }
    },

    async getHistorical(req, res) {
        try {
            const ticker_id = req.params.ticker;
            const result = await daily_price.findAll({
                attributes: [
                    [sequelize.literal("price_date"), 'time'],
                    [sequelize.literal("open_price * 1"), 'open'],
                    [sequelize.literal("high_price"), 'high'],
                    [sequelize.literal("low_price"), 'low'],
                    [sequelize.literal("close_price"), 'close'],
                    [sequelize.literal("volume"), 'volume'],
                    // "open_price", 'high_price', 'low_price', 'close_price', 'adj_close_price', 'volume'
                ],
                where: {
                    [Op.and]: [
                        {ticker_id}
                    ]
                }
            });

            const data = result.map(item => {
                const json_data = {};
                json_data['time'] = item.getDataValue('time');
                json_data['open'] = parseFloat(item.getDataValue('open'));
                json_data['high'] = parseFloat(item.getDataValue('high'));
                json_data['low'] = parseFloat(item.getDataValue('low'));
                json_data['close'] = parseFloat(item.getDataValue('close'));
                json_data['value'] = parseFloat(item.getDataValue('volume'));
                return json_data
            })

            res
                .status(201)
                .json(ResponseFormat.build(data, "Get all Tickers", 201, "success"));
        } catch (error) {
            console.log(error);
            res.status(500).json(ResponseFormat.build(error, "Internal server error", 500, "error"));
        }
    },
}