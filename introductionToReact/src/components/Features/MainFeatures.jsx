import { FeaturesItem1 } from './FeaturesItem1'
import { FeaturesItem2 } from './FeaturesItem2'
import { FeaturesItem3 } from './FeaturesItem3'
import { FeaturesItem4 } from './FeaturesItem4'
import { ProgressBar1 } from './ProgressBar1'
import { ProgressBar2 } from './ProgressBar2'
import { ProgressBar3 } from './ProgressBar3'
import { ProgressBar4 } from './ProgressBar4'

export const Features = () => (
    <div id="features" className="features section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="features-content">
                        <div className="row">
                            <FeaturesItem1/>
                            <FeaturesItem2/>
                            <FeaturesItem3/>
                            <FeaturesItem4/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="skills-content">
                        <div className="row">
                            <ProgressBar1/>
                            <ProgressBar2/>
                            <ProgressBar3/>
                            <ProgressBar4/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);