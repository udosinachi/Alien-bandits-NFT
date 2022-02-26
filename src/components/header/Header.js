import { Head } from './Style'

const Header = () => {
  return (
    <div>
      <Head>
        <div className='sub-div'>
          <div className='center-div'>
            <div className='text-div'>
              <img src='/images/Head.png' alt='head' />
              <div className='h3-div'>
                <h3>Alien Bandit</h3>
              </div>
              <p>
                10,200 Alien Bandits making an impact in society through the
                metaverse.
              </p>
            </div>

            <div className='form-div'>
              <form>
                <section>
                  <p className='span'>Max mint - 10</p>
                  <div className='minting'>
                    <button type='button' className='butt'>
                      -
                    </button>
                    <input type='number' placeholder='1' />
                    <button type='button' className='butt'>
                      +
                    </button>
                  </div>
                </section>
                <button className='mint-button'>Mint</button>
                <span style={{ color: 'red' }}>
                  Connect wallet before trying to mint
                </span>
              </form>
            </div>
          </div>
        </div>
      </Head>
    </div>
  )
}

export default Header
