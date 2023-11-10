import styled from "styled-components";

const CollabsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    
    .photo{
        max-width: 200px;
        width: 100%;
        height: 200px;
        border-radius: 1000px;
        overflow: hidden;
        margin-right: 20px ;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;

            
        }

        &:hover{
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

        }
    }
    .description{
        p{
            margin:0 ;
        }
        .name{
            font-size: 30px;
            color: #024CAD;
            margin-bottom: 10px;
        }
        .description_text{
            max-width: 260px;
            font-size: 15px;
            margin-bottom: 10px;
        }
    }

    @media(max-width:500px){
        .photo{
            max-width: 150px;
            width: 100%;
            height: 150px;
        }
    }
    @media(max-width:400px){
        flex-direction: column;
        width: 100%;
        .photo{
            margin: 0 ;
        }
        .description{
            text-align: center;
            align-items: center;

            .description_text{
                margin: 0 auto;
            }
        }
    }
`

export default CollabsStyle