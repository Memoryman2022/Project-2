import { Link } from "react-router-dom";
import instagram from "../../public/instagram.png";
import twitter from "../../public/twitter.png";

export default function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<h6>Social Media</h6>
				<div>
					<a>
						<img src={instagram} alt="instagram" />
					</a>
					<a>
						<img src={twitter} alt="twitter" />
					</a>
				</div>
			</div>
			<div className="namesFooter">
				<h6>Developed by</h6>
				<p>Luis Felipe</p>
				<p>Robert Cannon</p>
			</div>
			<div className="contactFooter">
				<h6>Contact</h6>
				<p>Focus@gmail.com</p>
			</div>
		</div>
	);
}
