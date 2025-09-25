import { useState } from 'react';
import Money from './Money';

const DonatePage = () => {
    const [isCheckedOne, setIsCheckedOne] = useState(false);
    const [isCheckedMonthly, setIsCheckedMonthly] = useState(false);

    const [isCheckedMoney, setIsCheckedMoney] = useState(0);
    function onSubmit(ev) {
        ev.preventDefault();

        let formData = new FormData(ev.target);

        console.log(...formData.values());
        ev.target.reset();
    }

    function onChangeOne() {
        setIsCheckedOne(true);
        setIsCheckedMonthly(false);
        setIsCheckedMoney('50');
    }

    function onChangeMonthly() {
        setIsCheckedOne(false);
        setIsCheckedMonthly(true);
        setIsCheckedMoney('15');

    }

    function onChangeMoney(ev) {
        setIsCheckedMoney(ev.currentTarget.parentNode.children[1].textContent.split('$')[1]);
    }

    return (

        <section className="donate-section">
            <div className="section-overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mx-auto">
                        <form onSubmit={onSubmit} className="custom-form donate-form" method="get" role="form">
                            <h3 className="mb-4">Make a donation</h3>

                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <h5 className="mb-3">Donation Frequency</h5>
                                </div>

                                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="DonationFrequency" id="DonationFrequencyOne" checked={isCheckedOne} onChange={onChangeOne} />

                                        <label className="form-check-label" htmlFor="DonationFrequencyOne">
                                            One Time
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                                    <div className="form-check form-check-radio">
                                        <input className="form-check-input" type="radio" name="DonationFrequency" id="DonationFrequencyMonthly" checked={isCheckedMonthly} onChange={onChangeMonthly} />

                                        <label className="form-check-label" htmlFor="DonationFrequencyMonthly">
                                            Monthly
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-12">
                                    <h5 className="mt-2 mb-3">Select an amount</h5>
                                </div>

                                <Money money={10} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />
                                <Money money={15} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />
                                <Money money={20} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />
                                <Money money={25} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />
                                <Money money={30} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />
                                <Money money={45} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />
                                <Money money={50} onChangeMoney={onChangeMoney} isCheckedMoney={isCheckedMoney} />

                                <div className="col-lg-6 col-12 form-check-group">
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1">$</span>

                                        <input type="text" className="form-control" placeholder="Custom amount" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-12">
                                    <h5 className="mt-1">Personal Info</h5>
                                </div>

                                <div className="col-lg-6 col-12 mt-2">
                                    <input type="text" name="donation-name" id="donation-name" className="form-control" placeholder="Jack Doe" required />
                                </div>

                                <div className="col-lg-6 col-12 mt-2">
                                    <input type="email" name="donation-email" id="donation-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jackdoe@gmail.com" required />
                                </div>

                                <div className="col-lg-12 col-12">
                                    <h5 className="mt-4 pt-1">Choose Payment</h5>
                                </div>

                                <div className="col-lg-12 col-12 mt-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="DonationPayment" id="flexRadioDefault9" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault9">
                                            <i className="bi-credit-card custom-icon ms-1"></i>
                                            Debit or Credit card
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="DonationPayment" id="flexRadioDefault10" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault10">
                                            <i className="bi-paypal custom-icon ms-1"></i>
                                            Paypal
                                        </label>
                                    </div>

                                    <button type="submit" className="form-control mt-4">Submit Donation</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DonatePage;