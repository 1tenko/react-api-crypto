import React from "react";
import styled from "styled-components";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <CoinContainer>
      <CoinRow>
        <CoinStyled>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </CoinStyled>
        <CoinData>
          <p className="coin-price">Price: ${price}</p>
          <p className="coin-volume">Volume: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">
              Change: {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketCap">
            Mkt Cap: ${marketCap.toLocaleString()}
          </p>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
};

export default Coin;

const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  justify-items: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
`;

const CoinStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
  h1 {
    font-size: 16px;
    width: 150px;
  }
  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  .coin-symbol {
    text-transform: uppercase;
  }
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  .coin-price {
    width: 110px;
  }
  .coin-volume {
    width: 200;
  }
  .coin-marketCap {
    width: 240;
  }

  .coin-percent {
    width: 80px;
  }
  .red {
    color: #f00606;
  }
  .green {
    color: #11d811;
  }
`;
