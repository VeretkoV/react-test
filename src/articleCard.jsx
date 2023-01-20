import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ArticleCard = ({ article }) => {
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 400, m: 2, height: 530 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="217"
                            src={article.urlToImage}
                            alt={article.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                {article.publishedAt}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ textTransform: 'uppercase' }}>
                                {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 70 }}>
                                {article.description}   
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ display: 'block', my: 2, }}>
                        <Button size="small" color="primary">
                            Read more
                        </Button>
                    </CardActions>
                </Card>
            </div>
            
        </div>
    )
}


export default ArticleCard;