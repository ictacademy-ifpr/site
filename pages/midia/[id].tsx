import Header from '../../src/components/header'
import Footer from '../../src/components/footer'

import FooterStyle from '../../styles/FooterStyle'
import MidiaStyle from '../../styles/midia'
import { useRouter } from 'next/router'
import midia from '../../src/data/midia.json'

export default function MidiaDetail(){
    const router = useRouter();
    const id = router.query.id


    return(
        <>
            <Header class='white' base='../' />
            <MidiaStyle>
                <div className="banner">
                    <div className="container">
                        <h2>Publicações</h2>
                    </div>
                </div>

                <div className='body_specific_midia'>
                    <div className="container">
                        {midia.map((item, index) => 
                            index.toString() == id &&
                            <>
                            <div className='img_specific_midia'>
                                <img src={`../${item.img}`} alt='Imagem da noticia'/>
                            </div>
                            <div className='text_specific_midia'>
                                <h2>{item.title}</h2>
                                {item.text.map((txt, index) => 
                                    <p key={index}>{txt}</p>
                                )}
                            </div>                                                                                
                            </>
                        )}
                        
                    </div>
                </div>
            </MidiaStyle>

            <Footer/>
        </>
    )
}