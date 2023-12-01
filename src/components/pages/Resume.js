import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Modal,
  Typography,
} from "@mui/material";
import { bgcolor, maxWidth, width } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "darkgray",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Resume = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen1 = () => setOpen1(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen3(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);

  return (
    <div className="md:mt-20 mt-10 text-white">
      <div className="flex items-center justify-center">
        <h1 className="md:text-7xl text-5xl font-bold">Resume</h1>
      </div>
      <div className="md:flex items-center justify-center mt-12">
        <p className="text-2xl font-bold text-gray-400 text-center">
          As a dedicated and skilled Front End Developer with over 7 years of
          experience, I prioritize creating fast, user friendly websites <br />{" "}
          using React, Vue.js, Angular, and other front-end technologies while
          also having the ability to create REST API or backends using Node.js,
          Express, and MongoDB.
          <br /> My strengths also include working in fast paced environments
          and solving complex problems swiftly using agile methodologies. <br />
          I am always up-to-date with the latest trends and technology, making
          me dedicated to delivering robust solutions that meet modern demands.
        </p>
      </div>
      <Container>
        <div className="flex flex-wrap md:flex-row flex-col mt-12 md:justify-between justify-center space-y-5 items-center md:w-full">
          <Card
            sx={{
              maxWidth: 550,
              backgroundColor: "rgb(143 143 151)",
              minHeight: 300,
              boxShadow: 20,
              height: 350,
              marginTop: 2,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                color="yellow"
                fontWeight="800"
                className="mt-12"
              >
                July 2018 - March 2019
              </Typography>
              <Typography variant="h5" mt={2} color="white" fontWeight="600">
                Front-End Developer
              </Typography>
              <Typography variant="h6" fontFamily="cursive">
                Cloudhouse, London, UK
              </Typography>
              <Typography variant="subtitle1" mt={3}>
                Translated design concepts into responsive and pixel-perfect web
                applications using HTML5, CSS3, and JavaScript, ensuring a
                seamless user experience across various devices.
              </Typography>
            </CardContent>
            <div className="flex justify-center mt-10">
              <Button variant="contained" onClick={handleOpen}>
                View More
              </Button>
            </div>
          </Card>
          <Card
            sx={{
              maxWidth: 550,
              backgroundColor: "rgb(143 143 151)",
              minHeight: 300,
              boxShadow: 20,
              height: 350,
            }}
            classes="bg-gray-500"
          >
            <CardContent>
              <Typography variant="h4" color="yellow" fontWeight="800">
                April 2019 - June 2020
              </Typography>
              <Typography variant="h5" mt={2} color="white" fontWeight="600">
                Full-Stack Developer
              </Typography>
              <Typography variant="h6" fontFamily="cursive">
                Collabera, Manila, Philippines
              </Typography>
              <Typography variant="subtitle1" mt={3}>
                Designed and implemented RESTful APIs, leveraging technologies
                like Node.js and Express.js for the backend, facilitating
                seamless communication between the frontend and server
              </Typography>
            </CardContent>
            <div className="flex justify-center mt-10">
              <Button variant="contained" onClick={handleOpen1}>
                View More
              </Button>
            </div>
          </Card>
          <Card
            sx={{
              maxWidth: 550,
              backgroundColor: "rgb(143 143 151)",
              minHeight: 300,
              boxShadow: 20,
              height: 350,
            }}
            classes="bg-gray-500"
          >
            <CardContent>
              <Typography
                variant="h4"
                color="yellow"
                fontWeight="800"
                className="mt-12"
              >
                July 2020 - June 2021
              </Typography>
              <Typography variant="h5" mt={2} color="white" fontWeight="600">
                Front-End Developer
              </Typography>
              <Typography variant="h6" fontFamily="cursive">
                Docue, Stockholm, Sweden
              </Typography>
              <Typography variant="subtitle1" mt={3}>
                Collaborated with the back-end development team to design and
                implement RESTful APIs for seamless data retrieval and updates
              </Typography>
            </CardContent>
            <div className="flex justify-center m-5 mt-16">
              <Button variant="contained" onClick={handleOpen2}>
                View More
              </Button>
            </div>
          </Card>
          <Card
            sx={{
              maxWidth: 550,
              backgroundColor: "rgb(143 143 151)",
              minHeight: 300,
              boxShadow: 20,
              height: 350,
            }}
            classes="bg-gray-500"
          >
            <CardContent>
              <Typography variant="h4" color="yellow" fontWeight="800">
                July 2021 - Setemper 2023
              </Typography>
              <Typography variant="h5" mt={2} color="white" fontWeight="600">
                Front-End Developer
              </Typography>
              <Typography variant="h6" fontFamily="cursive">
                Deloitte, San Antonio, US
              </Typography>
              <Typography variant="subtitle1" mt={3}>
                In my professional experience at Deloitte, I successfully
                implemented cutting edge frontend technologies such as Angular,
                React, React Native, and GraphQL to enhance application
                performance and user experience by 40%
              </Typography>
            </CardContent>
            <div className="flex justify-center m-2">
              <Button variant="contained" onClick={handleOpen3}>
                View More
              </Button>
            </div>
          </Card>
        </div>
      </Container>

      {/* Modals */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            className="border-b-2"
            color="blue"
            fontFamily="inherit"
          >
            Front end Developer, Cloudhouse
          </Typography>
          <div id="modal-modal-description" className="mt-4 space-y-2">
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Translated design concepts into responsive and pixel-perfect web
                applications using HTML5, CSS3, and JavaScript, ensuring a
                seamless user experience across various devices.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Developed feature-rich single-page applications (SPAs) with a
                focus on optimizing performance and user engagement.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Integrated RESTful APIs and worked closely with back-end
                developers to ensure efficient data flow and real-time updates
                within the application.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Stayed abreast of the latest trends and emerging technologies in
                front-end development, continuously enhancing skills and
                adopting innovative approaches.
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            className="border-b-2"
            color="blue"
            fontFamily="inherit"
          >
            Full-Stack Developer, Collabera
          </Typography>
          <div id="modal-modal-description" className="mt-4 space-y-2">
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Developed dynamic and responsive user interfaces using React.js
                and Angular, resulting in a seamless and captivating user
                experience; increased user engagement by 40% and reduced bounce
                rate by 25%.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Designed and implemented RESTful APIs, leveraging technologies
                like Node.js and Express.js for the backend, facilitating
                seamless communication between the frontend and server
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Worked with MongoDB to design efficient data storage solutions
                and optimize database queries.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Engaged in the full software development life cycle, from
                initial concept and design to coding, testing, deployment, and
                maintenance.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Integrated third-party APIs and services such as Stripe, PayPal,
                and Google Analytics into the Gun e-commerce platform using
                Node.js, resulting in improved functionality and data analytics
                capabilities.
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button variant="contained" onClick={handleClose1}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            className="border-b-2"
            color="blue"
            fontFamily="inherit"
          >
            Frontend Developer, Docue
          </Typography>
          <div id="modal-modal-description" className="mt-4 space-y-2">
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                During my time at Docue, I spearheaded the redesign of their
                core document collaboration platform using React, focusing on
                enhancing the user interface and overall user experience.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Created reusable components to streamline the development
                process and ensure consistency across the platform
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Developed and launched a fully responsive web application using
                React.js, Redux, and Material UI that achieved a modern layout
                and improved user engagement
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Integrated with third-party eSignature APIs, ensuring a seamless
                and secure signing experience for users
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Collaborated with the back-end development team to design and
                implement RESTful APIs for seamless data retrieval and updates.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Provided excellent support for 100% of user acceptance,
                integration, and system testing, ensuring a smooth and
                successful project delivery
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button variant="contained" onClick={handleClose2}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            className="border-b-2"
            color="blue"
            fontFamily="inherit"
          >
            Front End Developer, Deloitte
          </Typography>
          <div id="modal-modal-description" className="mt-4 space-y-2">
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                In my professional experience at Deloitte, I successfully
                implemented cutting edge frontend technologies such as Angular,
                React, React Native, and GraphQL to enhance application
                performance and user experience by 40%
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Led a cross-functional team in the successful delivery of a
                large-scale enterprise application for a major client in the
                financial sector
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Built responsive and user-friendly front-end interfaces using
                React.js, ensuring an optimal user experience across devices
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Ensured exceptional user experience by converting over 50 Figma
                Screen designs into pixel-perfect and fully mobile-responsive
                websites with Tailwind CSS
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Collaborated with UX/UI designers to create visually appealing
                and intuitive interfaces that met the client's business
                requirements.
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Actively participated in sprint planning, daily stand-ups, and
                retrospectives, contributing to the agile development process
                and ensuring smooth project execution
              </span>
            </div>
            <div className="flex space-x-1">
              <div className="mt-[0.5]">
                <VerifiedOutlinedIcon color="success" />
              </div>
              <span>
                Represented the frontend team in cross-functional meetings,
                conveying technical requirements and ensuring alignment between
                different departments
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button variant="contained" onClick={handleClose3}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <div className="flex justify-around mt-6 pb-12">
        <Button variant="contained" className="w-32">
          <Link
            to="https://flowcv.com/resume/ftr0a87usm"
            target="_blank"
            className="text-yellow-300 font-bold"
          >
            Open CV
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Resume;
