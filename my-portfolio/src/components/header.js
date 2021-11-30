import Nav from './nav'

const header = ({activeTab, setActiveTab}) => {
    return(
        <div class="container">
        <header>
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>
        </div>
        
    )
}

export default header