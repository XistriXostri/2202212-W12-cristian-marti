export default function HomePage() {
    const totalRobots = JSON.parse(
        sessionStorage.getItem('totalRobots') as string
    );

    return (
        <>
            <h2 className="page__title">Home</h2>
            <hr className="bar"></hr>
            <p className="page__text">
                Robots: {totalRobots ? totalRobots : 0}
            </p>
        </>
    );
}