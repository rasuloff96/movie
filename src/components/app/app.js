import AppInfo from "../app-info/app-info"
import AppFilter from "../app-filter/app-filter"
import SearchPannel from "../search-panel/search-panel"
import "../app/app.css"

const App = () => {
    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo/>
                <div className="search-pannel">
                    <SearchPannel/>
                    <AppFilter/>
                </div>
            </div>
        </div>
    )
}

export default App