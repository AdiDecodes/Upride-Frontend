import React, {
	useEffect,
	useState,
} from 'react';
import axios from 'axios';
import styles from '../Styles/dashboard.module.scss';
import logoText from '../assets/logoText.png';
import logoIcon from '../assets/logoupride.svg';
import home from '../assets/home.svg';
import earning from '../assets/earnings.svg';
import services from '../assets/myServices.svg';
import profile from '../assets/profileLogo.png';
import booking from '../assets/viewBookingsIcon.svg';
import assets from '../assets/myAssets.svg';
import { BiSearch } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { set } from 'date-fns';

const Api = import.meta.env.VITE_API;

const Dashboard = () => {
	const [selectedTab, setSelectedTab] =
		useState(0);

	const tabSelected = (index) => {
		setSelectedTab(index);
	};

	const [data, setData] = useState({});

	const getData = async () => {
		try {
			const response = await axios.get(Api);
			setData(response.data.online_bookings);
			setData((e) =>
				setData({
					...e,
					...response.data.offline_bookings,
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	useEffect(() => {
		getData();
	}, []);
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.leftPanel}>
				<div className={styles.logoWrapper}>
					<img
						src={logoIcon}
						alt='logo'
						className={styles.logoIcon}
					/>
					<img
						src={logoText}
						alt='logo'
						className={styles.logoText}
					/>
				</div>

				<div
					className={styles.locationSelector}
				></div>

				<div className={styles.navigationTabs}>
					<div className={styles.tab}>
						<img src={home} />
						<span>My Profile</span>
					</div>
					<div className={styles.tab}>
						<img
							src={earning}
							alt=''
						/>
						<span>My Earnings</span>
					</div>
					<div className={styles.tab}>
						<img
							src={services}
							alt=''
						/>
						<span>My Services</span>
					</div>
					<div className={styles.tab}>
						<img
							src={assets}
							alt=''
						/>
						<span>My Assets</span>
					</div>
				</div>
			</div>
			<div className={styles.rightPanel}>
				<div className={styles.headBar}>
					<div className={styles.leftWrapper}>
						<div className={styles.searchBar}>
							<input
								type='text'
								placeholder='Search bookings'
							/>
							<div>
								<BiSearch />
							</div>
						</div>
						<div className={styles.addBooking}>
							<BsPlusLg />
							<span>New Booking</span>
						</div>
					</div>

					<div className={styles.profile}>
						<img
							src={profile}
							alt=''
						/>
						<span>Hello Lokesh! 👋</span>
					</div>
				</div>
				<div className={styles.headingWrapper}>
					<h3>View Bookings</h3>
					<img
						src={booking}
						alt=''
					/>
				</div>

				<div className={styles.tabSelector}>
					<div
						className={
							selectedTab === 1 ? styles.selected : ''
						}
						onClick={() => tabSelected(1)}
					>
						Active
					</div>
					<div
						className={
							selectedTab === 2 ? styles.selected : ''
						}
						onClick={() => tabSelected(2)}
					>
						Completed
					</div>
					<div
						className={
							selectedTab === 3 ? styles.selected : ''
						}
						onClick={() => tabSelected(3)}
					>
						Cancelled
					</div>
				</div>
				<div className={styles.bookingWrapper}>
					<div className={styles.bookingInfo}>
						<p>Name</p>
						<p>Date</p>
						<p>Package Details</p>
						<p>Payment Mode</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
