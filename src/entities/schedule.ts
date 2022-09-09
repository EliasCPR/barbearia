export interface ScheduleProps {
  costumer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Schedule {
  private props: ScheduleProps;

  get costumer() {
    return this.props.costumer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: ScheduleProps) {
    const {startsAt, endsAt} = props

    if (startsAt <= new Date()){
      throw new Error("invalid starts date")
    }

    if(endsAt <= startsAt){
      throw new Error("end date greater than start date")
    }
    
    this.props = props;
  }
}
