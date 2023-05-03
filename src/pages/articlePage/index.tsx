import { useState } from 'react';
import S from './styles'
import RequestAccessDialog from '../../views/main/home/request-access-dialog/request-access-dialog.comp'
import MainButton from '../../views/main/home/main-button'

import Article from '~/views/blog/article';

import { useRouter } from "next/router"


const ArticlePage = () => {
    const [active, setActive] = useState('All');
    const [is_open, setIsOpen] = useState(false)

    const router = useRouter()
    const {
        query: { title, date, author, image },
    } = router

    return (
        <S.Container>
            <div className='container-wrapper'>

                <div className='wrapper'>
                    <S.Filters>
                        <button onClick={() => setActive('All')} className={active === 'All' ? 'active' : ''} type='button'>All</button>
                        <button onClick={() => setActive('Releases')} className={active === 'Releases' ? 'active' : ''} type='button'>Releases</button>
                        <button onClick={() => setActive('Accounting')} className={active === 'Accounting' ? 'active' : ''} type='button'>Accounting</button>
                        <button onClick={() => setActive('Platforms')} className={active === 'Platforms' ? 'active' : ''} type='button'>Platforms</button>
                    </S.Filters>

                    <RequestAccessDialog is_open={is_open} setIsOpen={setIsOpen} trigger={<MainButton onClick={() => setIsOpen(true)} title="Request access" />} />
                </div>

                <S.Article>
                    <S.Title>{title}</S.Title>
                    <div className='block'>
                        <span className='block-date'>{date}</span>
                        {
                            author && <span className='block-author'>{author}</span>
                        }
                    </div>
                    <img className='decor-image' src={`${image}`}/>
                    <S.Text>
                        Figma ipsum component variant main layer. Scrolling library create layout asset selection line. Bold star list rectangle ipsum invite rotate. Bullet overflow arrange pencil opacity.
                    </S.Text>

                    <img src="/checking-account.jpg" alt={`${title}`} width="653" height="368" />

                    <S.Text>
                        Figma ipsum component variant main layer. Scrolling background italic hand mask pen. Community asset draft star layout bold. Shadow shadow select arrow pixel.
                    </S.Text>

                    <S.Text>
                        Figma ipsum component variant main layer. Scrolling background italic hand mask pen. Community asset draft star layout bold. Shadow shadow select arrow pixel.
                    </S.Text>
                </S.Article>
                <Article title="Every company is default-global." date="15 Dec, 2023" text="Lorem ipsum dolor sit amet consectetur. Vel nibh viverra lacinia hac integer congue malesuada." image="/article-icon2.svg" />
            </div>
        </S.Container>
    );
};

export default ArticlePage;