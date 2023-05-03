import { useState } from 'react';
import S from './styles'
import RequestAccessDialog from '../../views/main/home/request-access-dialog/request-access-dialog.comp'
import MainButton from '../../views/main/home/main-button'

import Article from '~/views/blog/article';

const Blog = () => {
    const [active, setActive] = useState('All');
    const [is_open, setIsOpen] = useState(false)

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

                <Article title="Push and pull accounting." date="15 Dec, 2023" author="John Doe" text="Lorem ipsum dolor sit amet consectetur. Lacinia mi fermentum massa lacinia scelerisque pretium pulvinar." image="/article-icon.svg" />
                <Article title="Every company is default-global." date="15 Dec, 2023" text="Lorem ipsum dolor sit amet consectetur. Vel nibh viverra lacinia hac integer congue malesuada." image="/article-icon2.svg" />
                <Article title="Modernbanc 2.0" date="15 Dec, 2023" text="Lorem ipsum dolor sit amet consectetur. Consectetur enim nibh nunc sapien." image="/article-icon3.png" />
                <Article title="Our Series A" date="15 Dec, 2023" text="Lorem ipsum dolor sit amet consectetur. Lacinia mi fermentum massa lacinia scelerisque pretium pulvinar." image="/article-icon.svg" />
                <Article title="Forgotten industry" date="15 Dec, 2023" text="Lorem ipsum dolor sit amet consectetur. Vel nibh viverra lacinia hac integer congue malesuada." image="/article-icon2.svg" />
                <Article title="The forgotten category." date="15 Dec, 2023" text="Lorem ipsum dolor sit amet consectetur. Vel nibh viverra lacinia hac integer congue malesuada." image="/article-icon3.png" />
            </div>

        </S.Container>
    );
};

export default Blog;