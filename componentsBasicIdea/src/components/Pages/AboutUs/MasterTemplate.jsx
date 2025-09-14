import { AboutUsTemplate } from './AboutUsTemplate'

export const MasterTemplate = ({
    inners
}) => (
    <div className="row">
        <div className="col-xs-12">
            <div className="tm-flex">
                {inners.map(AboutUsTemplate)}
            </div>
        </div>
    </div>
);