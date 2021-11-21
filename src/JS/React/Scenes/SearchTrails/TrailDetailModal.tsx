import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Slide,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { ActivityType, Trail } from "JS/Models/General";
import CloseIcon from "@material-ui/icons/Close";
import {
  activityTypeToString,
  getCordinates,
  getIconsByActivityType,
  normalizeValue,
} from "JS/Helpers/Helpers";
import {
  LayersControl,
  MapContainer,
  Polyline,
  TileLayer,
} from "react-leaflet";
import { mapView } from "JS/Helpers/Media";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGeoPoints } from "JS/React/Hooks/Trails";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  fontWeightBolder: {
    fontWeight: "bolder",
  },
  actTypeIcon: {
    color: theme.palette.common.black,
    fontSize: "5rem",
  },
  mapContainer: {
    minHeight: "50vh",
    width: "100%",
  },
  authorContainer: {
    background: theme.palette.grey[400],
    padding: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  marginTopBottom: {
    margin: theme.spacing(1, 0),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  borderBottom: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
  },
  elementsGridContainer: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  elementValue: {
    fontWeight: 600,
  },
  elementContainer: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    marginBottom: theme.spacing(2),
  },
}));

export type TrailsDetailModalClassKey = StyleClassKey<typeof useStyles>;

export interface TrailsDetailModalProps
  extends StandardProps<{}, TrailsDetailModalClassKey> {
  open: boolean;
  onClose: () => void;
  trail: Trail;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const TrailsDetailModal = (props: TrailsDetailModalProps) => {
  const classes = useStyles(props);
  const { open, onClose, trail } = props;

  const { points } = useGeoPoints(trail.file_name);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullScreen
    >
      <DialogTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Trail</Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container>
            <Grid item md={2}></Grid>
            <Grid item md={5} xs={12}>
              <div
                className={clsx(classes.authorContainer, classes.marginBottom)}
              >
                <div>
                  <FontAwesomeIcon
                    className={classes.actTypeIcon}
                    icon={getIconsByActivityType(
                      `${trail.actType}` as ActivityType
                    )}
                  />
                </div>
                <div>
                  <div className={classes.marginBottom}>
                    <Typography
                      className={clsx(classes.fontWeightBolder)}
                      color="textPrimary"
                      variant="body2"
                    >
                      {activityTypeToString(`${trail.actType}` as ActivityType)}
                    </Typography>
                    <Typography color="textPrimary" variant="body1">
                      {normalizeValue(trail.title)}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      className={clsx(classes.fontWeightBolder)}
                      color="textPrimary"
                      variant="body2"
                    >
                      Author
                    </Typography>
                    <Typography color="textPrimary" variant="body1">
                      {normalizeValue(trail.author)}
                    </Typography>
                  </div>
                </div>
              </div>
              <div>
                <MapContainer
                  center={[trail.lat, trail.lon]}
                  zoom={15}
                  className={classes.mapContainer}
                >
                  <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Street Map">
                      <TileLayer
                        url={mapView.mapBox.url}
                        {...mapView.mapBox.street}
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satellite Map">
                      <TileLayer
                        url={mapView.mapBox.url}
                        {...mapView.mapBox.satellite}
                      />
                    </LayersControl.BaseLayer>
                  </LayersControl>
                  {points && (
                    <Polyline
                      pathOptions={{
                        color: "blue",
                      }}
                      positions={getCordinates(points)}
                    />
                  )}
                </MapContainer>
              </div>
            </Grid>
            <Grid container item md={3} xs={12}>
              <Grid item xs={6} className={classes.elementsGridContainer}>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">Country</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.country)}
                  </Typography>
                </div>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">City</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.city)}
                  </Typography>
                </div>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">Distance</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.dist)}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6} className={classes.elementsGridContainer}>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">Altitude</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.alt)}
                  </Typography>
                </div>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">Elevation</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.elev)}
                  </Typography>
                </div>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">Duration</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.duration)}
                  </Typography>
                </div>
              </Grid>
              <Grid xs={12} className={classes.elementsGridContainer}>
                <div className={classes.elementContainer}>
                  <Typography variant="body2">Trip Time</Typography>
                  <Typography
                    className={classes.elementValue}
                    color="textPrimary"
                    variant="body1"
                  >
                    {normalizeValue(trail.tripTime)}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item md={2}></Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
