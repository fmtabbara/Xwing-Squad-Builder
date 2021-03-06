import React, { useContext, useState } from "react"
import {
  Typography,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Theme,
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import { TextWithButton } from "../../../components/text-with-button"
import { UpdateText } from "../../../components/update-text"
import { AppContext } from "../../../context"
import { SquadList } from "./squad.list"
import { Alert } from "@material-ui/lab"
import { FactionIcon } from "../../../components/faction-icon"

const useBuilderCardStyle = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxHeight: "100%",
    overflow: "auto",
  },
  content: {
    overflowY: "auto",
  },
  header: {
    padding: 0,
    position: "sticky",
    top: 0,
    background: theme.palette.background.paper,
  },
}))

export const BuilderCard = () => {
  const { squad } = useContext(AppContext)
  const classes = useBuilderCardStyle()
  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        className={classes.header}
        title={
          <BuilderCardHeader
            squadPoints={squad
              .map((s) => s.cost || 0)
              .reduce((a, c) => a + c, 0)}
          />
        }
      />
      <CardContent className={classes.content}>
        {squad.length === 0 && (
          <Alert style={{ margin: 8 }} severity="info">
            No squad pilots selected
          </Alert>
        )}
        <SquadList squad={squad} />
      </CardContent>
    </Card>
  )
}

const BuilderCardHeader = ({ squadPoints }: { squadPoints: number }) => {
  const total = 200
  const [squadName, setSquadName] = useState("Squad Name")
  const [showSquadNameInput, setShowSquadNameInput] = useState(false)
  const { faction } = useContext(AppContext)

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FactionIcon icon={faction!.icon} xws={faction!.xws} small />
        {showSquadNameInput ? (
          <UpdateText
            text={squadName}
            onClose={(currentSquadName) => {
              setSquadName(currentSquadName)
              setShowSquadNameInput(false)
            }}
            onUpdate={(updatedValue) => {
              setSquadName(updatedValue)
              setShowSquadNameInput(false)
            }}
          />
        ) : (
          <TextWithButton>
            <Typography variant="h6">{squadName?.toUpperCase()}</Typography>
            <IconButton onClick={() => setShowSquadNameInput(true)}>
              <EditIcon />
            </IconButton>
          </TextWithButton>
        )}
      </div>

      <Typography variant="body1" component="span" color="primary">
        <span
          style={{
            fontWeight: 700,
            color: squadPoints >= total ? "red" : undefined,
          }}
        >
          {squadPoints}/{total}
        </span>
      </Typography>
    </div>
  )
}
