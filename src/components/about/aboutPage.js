import './aboutPage.scss';
import about from '../../images/coffee-about.png';
import about2 from '../../images/coffee-about2.png';



export default function AboutPage(props) {
	const isOur = props.data === 'our';
	const imgSrc = isOur ? `${about}` : `${about2}`;
	console.log(about);


	return (
		<section className="aboutPage">
			<div className="aboutPage__content">
				<div className="aboutPage__img">
					<img src={imgSrc} alt="coffee" />
				</div>
				<div className="aboutPage__item">
					<div className="aboutPage__title">
						<h3>{props.title}</h3>
					</div>
					<div className="decoration">
						<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className="cofee" d="M5.38842 26.5504C4.03446 24.1621 4.95551 20.4168 7.7569 17.6151C10.9384 14.4341 15.3369 13.6759 17.5827 15.9214C17.585 15.9242 17.5878 15.9274 17.5912 15.9304C17.1418 17.2383 15.7102 20.0203 11.42 21.5246C7.48939 22.9031 5.9735 25.0955 5.38842 26.5504ZM16.2604 19.5906C15.2344 20.6175 13.776 21.6253 11.7102 22.3503C7.51763 23.8203 6.3463 26.2275 6.01941 27.3931C6.03524 27.409 6.04803 27.4255 6.06289 27.4401C8.3084 29.6857 12.7075 28.9274 15.8882 25.7464C18.7187 22.9159 19.6292 19.1225 18.2142 16.7383C17.8736 17.5324 17.2812 18.5697 16.2604 19.5906ZM7.58462 9.24521C12.1138 9.64211 14.564 7.69641 15.5119 6.69018C15.5103 6.68619 15.5091 6.68168 15.5079 6.67806C14.387 3.70713 10.0663 2.586 5.85742 4.17405C2.15073 5.57275 -0.231943 8.60593 0.017895 11.3398C1.15056 10.2555 3.43511 8.88224 7.58462 9.24521ZM9.91687 14.9334C13.6624 13.5206 16.0541 10.4387 15.7471 7.68311C15.1096 8.26655 14.1423 8.96808 12.7917 9.47782C11.4339 9.99006 9.68965 10.3081 7.50891 10.1171C3.08339 9.72906 1.02376 11.4401 0.245256 12.3682C0.253168 12.3889 0.258713 12.4091 0.265885 12.4285C1.38702 15.4002 5.70784 16.5218 9.91687 14.9334ZM23.0248 8.73791C25.7422 5.09208 25.3734 1.98481 25.015 0.649699C25.0109 0.649256 25.0068 0.647703 25.003 0.646816C21.8859 0.039928 18.6621 3.12782 17.8023 7.54314C17.0451 11.4328 18.3749 15.0529 20.8322 16.2767C20.5046 14.7432 20.5365 12.0782 23.0248 8.73791ZM25.9836 0.971332C26.1453 1.82059 26.2341 3.01211 25.9582 4.42863C25.6811 5.85357 25.0348 7.50469 23.7271 9.26029C21.0722 12.8223 21.446 15.4731 21.8269 16.623C21.8486 16.6275 21.869 16.6331 21.8891 16.6375C25.0065 17.2444 28.2299 14.157 29.0896 9.74126C29.8552 5.81187 28.4892 2.15716 25.9836 0.971332Z" fill="white" />
						</svg>
					</div>
					<div className="aboutPage__text">
						<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
							<br /><br />Afraid at highly months do things on at. Situation recommend objection do intention
							so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
					</div>
				</div>
			</div>
		</section>

	)

}