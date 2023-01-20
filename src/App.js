import { useEffect, useState } from 'react';

import './App.css';
import ArticleCard from './articleCard';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';


const API_URL = ' https://newsapi.org/v2/everything?q=title&apiKey=77e40889ebc742f989189ee59ff51075'

const App = () => {

const [articles, setArticles] = useState([]);

const [searchTerm, setSearchTerm] = useState('');

const searchArticles = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setArticles(data.articles);
}

    useEffect(() => {
        searchArticles('');
    }, []);
        return (
            <div>
                <div>
                    <Typography variant="h5" component="h5" sx={{ display: 'flex', pt: 10, pl: 12  }}>
                        Filter by keywords
                    </Typography>;

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pl: 12 }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Search what you want" variant="standard" value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                    </Box>
                </div>

                {articles?.length > 0
                    ? (
                        <div className='container'>
                            {articles.map((article) => (
                                <ArticleCard article={article} />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2>No Articles found</h2>
                        </div>
                    )}


                    

            </div>
        );
}

export default App;