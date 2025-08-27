import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

export default function RobotDetail() {
  const router = useRouter();
  const { id } = router.query;

  const robots = useSelector((state: RootState) => state.robotsReducer.robots);
  const robot = robots.find((r) => r.id === Number(id));

  if (!robot) return <p>Loading robot data...</p>;


  const recommended = robots.filter(r => r.id !== robot.id).slice(0, 4);

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'SEGA LOGO FONT', color: '#0ccac4' }}>

      <Link href="/">
        <button
          style={{
            backgroundColor: '#0ccac4',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontFamily: 'SEGA LOGO FONT',
          }}
        >
          Home
        </button>
      </Link>


      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
        }}
      >

        <div style={{ flexShrink: 0, width: '400px' }}>
          <h1 style={{ textAlign: 'left', marginBottom: '20px' }}>{robot.name}</h1>
          <img
            alt={robot.name}
            src={`https://robohash.org/${robot.id}?200x200`}
            width={400}
            height={400}
            style={{
              objectFit: 'cover',
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
              display: 'block',
            }}
          />
        </div>


        <div style={{ flexGrow: 1, maxWidth: '410px', textAlign: 'left', lineHeight: '1.8', marginTop: '60px' }}>
          <p>{robot.description}</p>
          <p style={{ marginTop: '30px', fontWeight: 'bold' }}>Email: {robot.email}</p>
        </div>
      </div>


      <div
        style={{
          marginTop: '60px',
          borderTop: '1px solid #0ccac4',
          paddingTop: '20px',
        }}
      >
        <h2 style={{ marginBottom: '20px', marginLeft: '300px' }}>Recommended Robots</h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',

          }}
        >
          {recommended.map((recRobot) => (
            <Link
              key={recRobot.id}
              href={`/robots/${recRobot.id}`}
              style={{
                display: 'block',
                width: '140px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#0ccac4',
                border: '2px solid #0ccac4',
                borderRadius: '10px',
                padding: '10px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={`https://robohash.org/${recRobot.id}?100x100`}
                alt={recRobot.name}
                width={100}
                height={100}
                style={{ borderRadius: '10px', marginBottom: '8px' }}
              />
              <div>{recRobot.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
