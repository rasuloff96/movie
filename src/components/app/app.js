import "../app/app.css"

import AppInfo from "../app-info/app-info"
import AppFilter from "../app-filter/app-filter"
import SearchPannel from "../search-panel/search-panel"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"

const App = () => {

    const data = [
        { id: 1 , name: "Kulrang Odamlar", views: 5019, favourite: true },
        { id: 2 , name: "Qotil", views: 8073, favourite: false },
        { id: 3 , name: "O'rgimchak odam", views: 489, favourite: false },
        { id: 4 , name: "Kalmar o'yini", views: 3192, favourite: false },
    ]

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className="search-pannel">
                    <SearchPannel />
                    <AppFilter />
                </div>
                <MovieList data={data} />
                <MoviesAddForm />
            </div>
        </div>
    )
}

export default App