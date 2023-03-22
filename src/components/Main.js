import { Button, Modal, Typography } from '@mui/material'
import React from 'react'
import front1 from '../assets/front1.png'
import front2 from '../assets/front2.png'
import rear1 from '../assets/rear1.png'
import rear2 from '../assets/rear2.png'
function Main() {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const handleClick = (src) => {
        setSelectedImage(src);
    };
    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            setSelectedImage(null);
        }

    };
    return (
        <div>

            <div className='main_container'>

                <div className='middle_content'>
                    <div className='description animate__animated animate__fadeInLeft'>
                        <Typography variant='h5' component='h5'>The VW Golf GTI Clubsport DSG has a turbocharged four cylinders in line transverse front engine providing a maximum torque of 400 Nm available from 2000 rpm and a maximum power outpup of 300 PS available at 5300 rpm transmitted to the 19 inch front wheels by an automatic 7 speed gearbox.</Typography>
                    </div>

                    <div className='img_container'>
                        <img className='img animate__animated animate__fadeInDown' src={front1} onClick={() => handleClick(front1)} alt='Golf 8 GTI front' />
                        <img className='img animate__animated animate__fadeInDown' src={rear1} onClick={() => handleClick(rear1)} alt='' />
                        <img className='img animate__animated animate__fadeInUp' src={rear2} onClick={() => handleClick(rear2)} alt='' />
                        <img className='img animate__animated animate__fadeInUp' src={front2} onClick={() => handleClick(front2)} alt='' />
                    </div>
                </div>

            </div>
            <Modal
                open={selectedImage !== null}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div onClick={handleCloseModal} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img src={selectedImage} alt='Golf 8 GTI' style={{ objectFit: 'contain', maxWidth: '90%', maxHeight: '90%', borderRadius: "10px" }} />
                </div>

            </Modal>
            <footer className='content animate__animated animate__fadeIn'>
                <Typography className='cars animate__animated animate__fadeIn animate__delay-1s' variant='h3' component='h3'>Golf 8 GTI CLUBSPORT 45</Typography>
                <div className='bottom_content'>
                    <Button className='buy_btn animate__animated animate__fadeIn animate__delay-2s'>Buy now</Button>
                    <Typography className='animate__animated animate__fadeIn animate__delay-2s' variant='h5' component='h5'>45 000$</Typography>

                </div>

            </footer>
        </div>
    )
}

export default Main