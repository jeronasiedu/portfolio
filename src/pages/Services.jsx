import { useState } from 'react'
import {
  ServicesContainer,
  CardContent,
  Button,
  ModalContent,
  ModalList,
} from '../styles/services.styled'
import { motion } from 'framer-motion'
import { service } from '../data'
import { Grid, Modal, IconButton } from '@mui/material'
import {
  BiCode,
  MdPhotoCameraFront,
  FiDatabase,
  BiArrowToRight,
  BsCheck,
  IoClose,
} from 'react-icons/all'
const Services = () => {
  return (
    <ServicesContainer id="services">
      <h1>Services </h1>
      <span>What I offer</span>
      <Grid container spacing={1}>
        {service.map((item, key) => {
          return (
            <Grid key={key} item xs={6} sm={4} md={4}>
              <Card {...item} />
            </Grid>
          )
        })}
      </Grid>
    </ServicesContainer>
  )
}
const Card = ({ first, last, icon, data }) => {
  const cardVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  const listChild = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.3,
      },
    },
  }
  const modalVariant = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 60,
    },
  }
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  let currentIcon = <BiCode size={30} />
  if (icon === 'FiDatabase') {
    currentIcon = <FiDatabase />
  } else if (icon === 'designIcon') {
    currentIcon = <MdPhotoCameraFront />
  }
  return (
    <>
      <CardContent>
        <div className="content">
          <p>{currentIcon}</p>
          <h3 className="service_title">
            {first} <br /> {last}
          </h3>
        </div>
        <Button onClick={handleOpen}>
          view more
          <BiArrowToRight className="arrow" size={20} />
        </Button>
      </CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        component={motion.div}
        variants={modalVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalContent>
          <div className="modal-controls">
            <h4 id="modal-title">
              {first} <br />
              {last}
            </h4>
            <IconButton aria-label="close" onClick={handleClose} color="error">
              <IoClose />
            </IconButton>
          </div>
          <ModalList>
            <motion.ul
              variants={cardVariant}
              initial="hidden"
              animate="visible"
            >
              {data.map((item, key) => {
                return (
                  <motion.li variants={listChild} key={key}>
                    <span>
                      <BsCheck size={20} />
                    </span>
                    {item}
                  </motion.li>
                )
              })}
            </motion.ul>
          </ModalList>
        </ModalContent>
      </Modal>
    </>
  )
}
export default Services
