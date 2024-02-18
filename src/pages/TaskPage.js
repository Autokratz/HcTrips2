import {Col, Row, Container, Card, CardBody, CardHeader} from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const TaskPage = () => {
    return (
        <Container>
            <SubHeader current="Task 4-8"/>
            <Row className="row-content">
                <Col sm="6">
                    <h3>Our Mission</h3>
                    <p>
                    <p>Information and Communication Technology (ICT) solutions play a crucial role in modern IT projects for several reasons:
<ul>
    <li>Efficiency: ICT solutions streamline processes and workflows, automating repetitive tasks, reducing manual errors, and improving overall efficiency. This efficiency translates to cost savings and faster project completion times.</li>
    <li>Collaboration: ICT tools facilitate seamless communication and collaboration among project team members, regardless of their geographical locations. This enables real-time sharing of information, better decision-making, and enhanced teamwork.</li>
    <li>Data Management: ICT solutions provide robust data management capabilities, allowing for the collection, storage, retrieval, and analysis of large volumes of data. This enables informed decision-making based on accurate and up-to-date information.</li>
    <li>Scalability: ICT solutions are often scalable, meaning they can easily adapt to changes in project scope, size, or requirements. This scalability ensures that IT projects can grow and evolve without significant disruptions.</li>
    <li>Remote Access: With the increasing trend of remote work, ICT solutions enable project team members to access project resources and collaborate from anywhere with an internet connection. This flexibility enhances productivity and ensures continuity, even in challenging circumstances.</li>
    <li>Risk Management: ICT solutions often come with built-in security features that help mitigate cybersecurity risks and protect sensitive project data. Additionally, they provide backup and disaster recovery mechanisms to ensure business continuity in case of unexpected events.</li>
    <li>Client Satisfaction: Implementing ICT solutions can improve the overall quality of deliverables and enhance client satisfaction by delivering projects on time, within budget, and meeting or exceeding expectations.</li>
    <li><a href="https://www.canva.com/design/DAF9I9Ch2pM/TbhF0ajGo1HxmNce8Ilr3A/view?utm_content=DAF9I9Ch2pM&utm_campaign=designshare&utm_medium=link&utm_source=editor"> Link to presentation </a></li>
</ul>
</p>
                    </p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>We care about your Feedback!</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiMMhsJve4bSSpBHnCCsIicXatT9izxN1wSYISEUpnMT-1zA/viewform?embedded=true" width="640" height="856" frameborder="0" marginheight="0" marginwidth="0"></iframe></dt>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p>Since i started booking my trips with HC Trips i have a new adventure every summer.</p>
                                <footer className="blockquote-footer">
                                    Michael Fernandez,{' '}
                                    <cite title='Source Title'>
                                        Sydney 2023
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div><img src="src/app/assets/img/feedbacksheet.png"></img></div>
        </Container>
    )
};

export default TaskPage;