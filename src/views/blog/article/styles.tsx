import styled from 'styled-components'

const Article = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #EDEDED;
    border-top: none;
    border-bottom: 1px dashed #EDEDED;
    padding: 60px 60px;

    .block {
        margin-bottom: 23px;
    }

    .block-date {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #A1A1AA; 
        margin-right: 10px;
    }

    .block-author {
        font-size: 16px;
        line-height: 160%;
        text-align: center;
        letter-spacing: 0.02em;
        color: #111827;
        border-left: 1px solid #EDEDED;
        padding-left: 10px;
    }

    img {
        width: 140px;
        height: 140px;
    }
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    color: #111827;
    margin-bottom: 22px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #111827;
    width: 600px;
`

export default { Article, Title, Text }
