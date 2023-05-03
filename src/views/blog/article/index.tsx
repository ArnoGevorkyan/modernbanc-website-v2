import S from './styles'
import Link from "next/link"

type TArticleProps = {
    title: string
    date: string
    author?: string
    text: string
    image?: string
}

const Article = ({ title, date, author, text, image }: TArticleProps) => {
    return (
        <S.Article>
            <div className='article-wrapper'>
                <Link href={{
                    pathname: "/articlePage",
                    query: { title: title, date: date, author: author, image: image },
                }}>
                    <a>
                        <S.Title>{title}</S.Title>
                    </a>
                </Link>
                <div className='block'>
                    <span className='block-date'>{date}</span>
                    {
                        author && <span className='block-author'>{author}</span>
                    }
                </div>
                <S.Text>
                    {text}
                </S.Text>
            </div>
            <img src={image} alt={title} />
        </S.Article>
    );
};

export default Article;