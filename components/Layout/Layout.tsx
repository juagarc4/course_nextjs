import Navbar from '@components/Navbar/Navbar'

// Module CSS
// import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    // Module CSS
    // <div className={styles.container}>
    <div>
      <Navbar />
      {children}
      <footer className={'container'}>This is the footer</footer>

      {/*Styled JSX*/}
      {/*<style jsx>{`*/}
      {/*    .container {*/}
      {/*        background-color: salmon;*/}
      {/*    }*/}
      {/*`}*/}

      {/*</style>*/}
    </div>
  )
}

export default Layout
