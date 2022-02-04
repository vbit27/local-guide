import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from 'react';

const PlaceCard: React.FC<PlaceCardProp> = ({ place, selected, refProp }) => {
  // check if selected and scroll
  if (selected)
    refProp.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <Card sx={{ maxWidth: '400' }} style={{ padding: '1rem' }} elevation={0}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350px"
            image={place.image}
            alt={place.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {place.name}
            </Typography>
            <Typography variant="body2" paragraph>
              {place.description}
            </Typography>
            {place.address ? (
              <Box display="flex" justifyContent="space-between">
                <AddLocationIcon fontSize="small" color="disabled" />
                <Typography variant="body2" color="textSecondary" paragraph>
                  {place.address}
                </Typography>
              </Box>
            ) : null}
            {place.phone_number ? (
              <Box
                display="flex"
                justifyContent="space-between"
                onClick={() => {
                  window.open(`tel:${place.phone_number}`);
                }}
              >
                <LocalPhoneIcon fontSize="small" color="disabled" />
                <Typography variant="body2" color="textSecondary" paragraph>
                  {place.phone_number}
                </Typography>
              </Box>
            ) : null}
            <Box display="flex" justifyContent="space-between">
              {place.price_level ? (
                <Typography variant="subtitle2">
                  Price: {place.price_level}
                </Typography>
              ) : null}

              {place.types ? (
                <Chip
                  key={place.types[1]}
                  label={place.types[1]}
                  size="medium"
                />
              ) : null}

              {place.rating ? (
                <Typography gutterBottom variant="subtitle2">
                  Rating: {place.rating}
                </Typography>
              ) : null}
            </Box>
          </CardContent>
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{ float: 'right' }}
            onClick={() => window.open(place.url, '_blank')}
          >
            <AssistantDirectionIcon color="inherit" fontSize="medium" />
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

interface PlaceCardProp {
  place: Places;
  refProp: React.RefObject<HTMLDivElement>;
  selected: boolean;
}

export default PlaceCard;
