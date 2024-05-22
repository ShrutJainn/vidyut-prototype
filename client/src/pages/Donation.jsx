import { useState } from "react";
import styles from "./Donation.module.css";

function Donation() {
  const [amount, setAmount] = useState("");
  return (
    <div className={styles.container}>
      <div
        className={styles.selection}
        style={{
          backgroundImage:
            "url(https://www.fao.org/images/newsroomlibraries/breafing-notes/36949400340_030e4ae5f9_oab4ccd35-fd6a-4230-bd2e-f0113f50357d.jpg?sfvrsn=426ca1c_3)",
        }}
      >
        <div className={styles.selection__label}>
          <div className={styles.selection__labelPrice}>RS45</div>
          <div className={styles.selection__labelContent}>
            <h3>NEEM</h3>
            <p>
              A mature neem tree can produce around 260 pounds (118 kg) of
              oxygen per year.
            </p>
          </div>
        </div>
        <div className={styles.selection__label}>
          <div className={styles.selection__labelPrice}>RS25</div>
          <div className={styles.selection__labelContent}>
            <h3>PEEPAL</h3>
            <p>
              According to Floweraura, the peepal tree produces oxygen 24 hours
              a day.
            </p>
          </div>
        </div>
        <div className={styles.selection__label}>
          <div className={styles.selection__labelPrice}>RS50</div>
          <div className={styles.selection__labelContent}>
            <h3>BANYAN</h3>
            <p>
              A mature banyan tree can produce enough oxygen to support two
              people annually by absorbing 48 pounds of carbon dioxide.
            </p>
          </div>
        </div>
        <div className={styles.selection__label}>
          <div className={styles.selection__labelPrice}>RS75</div>
          <div className={styles.selection__labelContent}>
            <h3>TEAK</h3>
            <p>
              Teak trees are known for producing a lot of oxygen and are an
              important part of the local environment.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <form
          className={`${styles.donatelyValidation} ${styles.formDonate}`}
          id={styles.intervalDonateForm}
          method="post"
        >
          <h3 className={styles.formTitle}>Enter an Amount </h3>
          <fieldset className={`${styles.row} ${styles.inputPriceOptions}`}>
            {/* <ul className={styles.formRadio}>
              <li
                id={styles.priceInterval1}
                className={styles.inputPriceOptions}
              >
                <input
                  type="radio"
                  name="donate-amount"
                  //   checked="true"
                  value="12"
                  onChange={() => setAmount("$12")}
                  id={styles.choice_6_0}
                  tabIndex="1"
                />
                <label htmlFor="choice_6_0">$12</label>
              </li>
              <li
                id={styles.priceInterval2}
                className={styles.inputPriceOptions}
              >
                <input
                  type="radio"
                  name="donate-amount"
                  value="65"
                  onChange={() => setAmount("$65")}
                  id={styles.choice_6_1}
                  tabIndex="2"
                />
                <label htmlFor="choice_6_1">$65</label>
              </li>
              <li
                id={styles.priceInterval3}
                className={styles.inputPriceOptions}
              >
                <input
                  type="radio"
                  name="donate-amount"
                  value="100"
                  onChange={() => setAmount("$100")}
                  id={styles.choice_6_2}
                  tabIndex="3"
                />
                <label htmlFor="choice_6_2">$100</label>
              </li>
              <li
                id={styles.priceInterval4}
                className={styles.inputPriceOptions}
              >
                <input
                  type="radio"
                  name="donate-amount"
                  value="500"
                  onChange={() => setAmount("$500")}
                  id={styles.choice_6_3}
                  tabIndex="4"
                />
                <label htmlFor="choice_6_3">$500</label>
              </li>
            </ul> */}
            <div
              className={styles.otherAmount}
              style={{ marginBottom: "3rem" }}
            >
              <label className={styles.label} htmlFor="donation_amount">
                RS
              </label>
              <input
                style={{
                  paddingLeft: "1rem",
                }}
                name="donation_amount"
                className={styles.required}
                id={styles.donationAmount}
                type="number"
                tabIndex="5"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required=""
              />
            </div>
          </fieldset>
          <fieldset className={`${styles.row} ${styles.radioDonation}`}>
            <div className={styles.invalidChoise}>
              <p>* Error: Please select one to proceed</p>
            </div>
            {/* <ul className={styles.gfield_radio} id={styles.input_2_4}>
              <li>
                <input
                  name="recurring"
                  type="radio"
                  value="1"
                  id={styles.choice_4_1}
                  tabIndex="6"
                />
                <label htmlFor="choice_4_1">Monthly recurring donation</label>
              </li>
              <li>
                <input
                  name="recurring"
                  type="radio"
                  value="0"
                  id={styles.choice_4_0}
                  tabIndex="7"
                  checked="check"
                />
                <label htmlFor="choice_4_0">One time donation</label>
              </li>
            </ul> */}
          </fieldset>
          <h3 className={styles.personalTitle}>Personal Information</h3>
          <fieldset className={`${styles.formContact} ${styles.row}`}>
            <div
              className={styles.form__fieldName}
              style={{ marginBottom: "2rem" }}
            >
              <label
                htmlFor="first_name"
                className={styles.labelInline}
              ></label>
              <input
                style={{ height: "3rem" }}
                type="text"
                className={`${styles.inputHalf} ${styles.required}`}
                name="first_name"
                id={styles.firstName}
                placeholder="First name"
                tabIndex="8"
                required=""
              />
              <input
                type="text"
                className={`${styles.inputHalf} ${styles.required}`}
                name="last_name"
                id={styles.lastName}
                placeholder="Last name"
                tabIndex="9"
                required=""
              />
            </div>
            <div className={styles.form_filedEmail}>
              <label
                htmlFor="email_address"
                className={styles.labelInline}
              ></label>
              <input
                style={{ height: "3rem", margRSight: ".4vw", width: "100%" }}
                type="email"
                name="email_address"
                className={styles.required}
                id={styles.emailAddress}
                placeholder="Email address"
                tabIndex="10"
                required=""
              />
            </div>
          </fieldset>
          <fieldset className={styles.row}>
            <div className={styles.btnDonate}>
              <button
                href="#donation-form"
                type="submit"
                id={styles.donate_card_info}
                style={{ borderRadius: "34px" }}
                className={`${styles.btn} ${styles.btnSubmit} ${styles.btnEnter}`}
                tabIndex="11"
              >
                Enter Card Info
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Donation;
