import Nav from './nav'

const header = ({activeTab, setActiveTab}) => {
    return(
        <div className="jumbotron">
        <header>
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>
        </div>
        
    )
}

export default header