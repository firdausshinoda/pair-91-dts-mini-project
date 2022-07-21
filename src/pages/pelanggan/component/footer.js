import { Button, Col, Row } from "react-bootstrap"
import './../css/footer.css'
import './../../../css/costume-ui.css'

const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <Col xs={1}/>
                <Col>
                    <ol>
                        <li>Audio and Subtitles</li>
                        <li>Media Center</li>
                        <li>Security</li>
                        <li>Contact US</li>
                        <li><Button variant="dark" className="btn-transparant-dark-outline">Service Code</Button></li>
                        <li>© 2022 Movies, All Right Reserved</li>
                    </ol>
                </Col>
                <Col>
                    <ol>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Provisions</li>
                    </ol>
                </Col>
                <Col>
                    <ol>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ol>
                </Col>
                <Col>
                    <ol>
                        <li>Gift Card</li>
                        <li>Term of Use</li>
                        <li>Corporate Information</li>
                    </ol>
                </Col>
            </Row>
        </div>
    )
}

export default Footer