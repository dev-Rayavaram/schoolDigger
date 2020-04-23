import React,{Component} from 'react';
import './styles/App.scss';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import BrowserHistory from './components/browserHistory'
import QuickLinks from './components/quickLinks'
import SchoolsList from './components/schoolsList'
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import results from './seed';


const apiKey=process.env.REACT_APP_API_KEY
const appId=process.env.REACT_APP_ID

class  App extends Component {
  constructor(props){
    super(props);
    this.state={
        city:'',
        state:'',
        schools:[],
        browserHistory:[],
        isLoaded:false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

  }
  handleCityChange=(e)=>{
      this.setState({city:e.target.value})
  }
  handleStateChange=(e)=>{
    this.setState({state:e.target.value})
}
  handleSearch=(e)=>{
    e.preventDefault();

    let results={
      "_comment": "NOTICE: API limit for Dev/Test is 1 call per minute, up to 20 calls per day. This limit has been reached. You may continue to make calls, but this result is bogus data and should not be used in a production environment. To change your API plan, go to https://developer.schooldigger.com/admin/applications/",
      "numberOfSchools": 106,
      "numberOfPages": 11,
      "schoolList": [
        {
          "schoolid": "483510013726",
          "schoolName": "School #663694647",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "",
          "highGrade": "",
          "schoolLevel": "Adult Education",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #624693676",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 859,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": null,
              "percentofAsianStudents": null,
              "percentofHispanicStudents": null,
              "percentofIndianStudents": null,
              "percentofPacificIslanderStudents": null,
              "percentofWhiteStudents": null,
              "percentofTwoOrMoreRaceStudents": null,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 44.3,
              "pupilTeacherRatio": 0.0,
              "numberofAfricanAmericanStudents": null,
              "numberofAsianStudents": null,
              "numberofHispanicStudents": null,
              "numberofIndianStudents": null,
              "numberofPacificIslanderStudents": null,
              "numberofWhiteStudents": null,
              "numberofTwoOrMoreRaceStudents": null,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": false
        },
        {
          "schoolid": "483510009654",
          "schoolName": "School #1821375342",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "8",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #1361129951",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 808,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": null,
              "percentofAsianStudents": null,
              "percentofHispanicStudents": null,
              "percentofIndianStudents": null,
              "percentofPacificIslanderStudents": null,
              "percentofWhiteStudents": null,
              "percentofTwoOrMoreRaceStudents": null,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 13.2,
              "pupilTeacherRatio": 0.0,
              "numberofAfricanAmericanStudents": 11,
              "numberofAsianStudents": 62,
              "numberofHispanicStudents": 5,
              "numberofIndianStudents": 51,
              "numberofPacificIslanderStudents": 71,
              "numberofWhiteStudents": 60,
              "numberofTwoOrMoreRaceStudents": 6,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": false
        },
        {
          "schoolid": "489999952541",
          "schoolName": "School #485728255",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "PK",
          "highGrade": "K",
          "schoolLevel": "Private",
          "isCharterSchool": "(n/a)",
          "isMagnetSchool": "(n/a)",
          "isVirtualSchool": "(n/a)",
          "isTitleISchool": "(n/a)",
          "isTitleISchoolwideSchool": "(n/a)",
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2018,
              "numberOfStudents": 686,
              "percentFreeDiscLunch": null,
              "percentofAfricanAmericanStudents": 52.31,
              "percentofAsianStudents": 52.17,
              "percentofHispanicStudents": 94.75,
              "percentofIndianStudents": 27.08,
              "percentofPacificIslanderStudents": 99.12,
              "percentofWhiteStudents": 5.64,
              "percentofTwoOrMoreRaceStudents": 78.11,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 2.0,
              "pupilTeacherRatio": 10.0,
              "numberofAfricanAmericanStudents": 73,
              "numberofAsianStudents": 19,
              "numberofHispanicStudents": 23,
              "numberofIndianStudents": 40,
              "numberofPacificIslanderStudents": 22,
              "numberofWhiteStudents": 33,
              "numberofTwoOrMoreRaceStudents": 85,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": true,
          "privateDays": null,
          "privateHours": 7.5,
          "privateHasLibrary": true,
          "privateCoed": "Coed",
          "privateOrientation": "Nonsectarian",
          "hasBoundary": null
        },
        {
          "schoolid": "482001008147",
          "schoolName": "School #1863434980",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "5",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4820010",
            "districtName": "School District #103956797",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 316,
              "rankOf": 1000,
              "rankStars": 1,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 10.23,
              "averageStandardScore": 3.22
            },
            {
              "year": 2018,
              "rank": 290,
              "rankOf": 1000,
              "rankStars": 3,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 1.45,
              "averageStandardScore": 28.99
            }
          ],
          "rankMovement": -63,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 543,
              "percentFreeDiscLunch": 10.84,
              "percentofAfricanAmericanStudents": 27.66,
              "percentofAsianStudents": 7.91,
              "percentofHispanicStudents": 92.94,
              "percentofIndianStudents": 93.0,
              "percentofPacificIslanderStudents": 65.1,
              "percentofWhiteStudents": 69.03,
              "percentofTwoOrMoreRaceStudents": 77.85,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 43.6,
              "pupilTeacherRatio": 16.1,
              "numberofAfricanAmericanStudents": 64,
              "numberofAsianStudents": 32,
              "numberofHispanicStudents": 56,
              "numberofIndianStudents": 28,
              "numberofPacificIslanderStudents": 12,
              "numberofWhiteStudents": 92,
              "numberofTwoOrMoreRaceStudents": 53,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        },
        {
          "schoolid": "483510009169",
          "schoolName": "School #1200206408",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "5",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #1447896454",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 624,
              "rankOf": 1000,
              "rankStars": 1,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 59.45,
              "averageStandardScore": 77.86
            },
            {
              "year": 2018,
              "rank": 766,
              "rankOf": 1000,
              "rankStars": 0,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 46.2,
              "averageStandardScore": 39.5
            }
          ],
          "rankMovement": -38,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 950,
              "percentFreeDiscLunch": 19.4,
              "percentofAfricanAmericanStudents": 39.64,
              "percentofAsianStudents": 73.61,
              "percentofHispanicStudents": 50.72,
              "percentofIndianStudents": 65.76,
              "percentofPacificIslanderStudents": 8.28,
              "percentofWhiteStudents": 44.77,
              "percentofTwoOrMoreRaceStudents": 94.8,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 38.9,
              "pupilTeacherRatio": 14.7,
              "numberofAfricanAmericanStudents": 50,
              "numberofAsianStudents": 65,
              "numberofHispanicStudents": 26,
              "numberofIndianStudents": 30,
              "numberofPacificIslanderStudents": 74,
              "numberofWhiteStudents": 52,
              "numberofTwoOrMoreRaceStudents": 55,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        },
        {
          "schoolid": "483510003955",
          "schoolName": "School #446814157",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "6",
          "highGrade": "8",
          "schoolLevel": "Middle",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "Yes",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #1178309090",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 487,
              "rankOf": 1000,
              "rankStars": 0,
              "rankLevel": "Middle",
              "rankStatewidePercentage": 18.13,
              "averageStandardScore": 17.43
            },
            {
              "year": 2018,
              "rank": 504,
              "rankOf": 1000,
              "rankStars": 3,
              "rankLevel": "Middle",
              "rankStatewidePercentage": 11.28,
              "averageStandardScore": 39.01
            }
          ],
          "rankMovement": -90,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 593,
              "percentFreeDiscLunch": 76.48,
              "percentofAfricanAmericanStudents": 34.24,
              "percentofAsianStudents": 9.71,
              "percentofHispanicStudents": 61.71,
              "percentofIndianStudents": 53.44,
              "percentofPacificIslanderStudents": 61.96,
              "percentofWhiteStudents": 70.07,
              "percentofTwoOrMoreRaceStudents": 49.63,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 57.5,
              "pupilTeacherRatio": 12.1,
              "numberofAfricanAmericanStudents": 38,
              "numberofAsianStudents": 90,
              "numberofHispanicStudents": 81,
              "numberofIndianStudents": 90,
              "numberofPacificIslanderStudents": 20,
              "numberofWhiteStudents": 66,
              "numberofTwoOrMoreRaceStudents": 98,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        },
        {
          "schoolid": "483510007222",
          "schoolName": "School #50413960",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "5",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #1945543696",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 418,
              "rankOf": 1000,
              "rankStars": 1,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 49.16,
              "averageStandardScore": 7.15
            },
            {
              "year": 2018,
              "rank": 232,
              "rankOf": 1000,
              "rankStars": 2,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 63.09,
              "averageStandardScore": 97.54
            }
          ],
          "rankMovement": -29,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 129,
              "percentFreeDiscLunch": 77.6,
              "percentofAfricanAmericanStudents": 68.97,
              "percentofAsianStudents": 66.58,
              "percentofHispanicStudents": 62.33,
              "percentofIndianStudents": 11.71,
              "percentofPacificIslanderStudents": 60.49,
              "percentofWhiteStudents": 48.93,
              "percentofTwoOrMoreRaceStudents": 68.29,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 44.4,
              "pupilTeacherRatio": 14.4,
              "numberofAfricanAmericanStudents": 60,
              "numberofAsianStudents": 41,
              "numberofHispanicStudents": 4,
              "numberofIndianStudents": 72,
              "numberofPacificIslanderStudents": 67,
              "numberofWhiteStudents": 5,
              "numberofTwoOrMoreRaceStudents": 3,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        },
        {
          "schoolid": "483510012132",
          "schoolName": "School #354740591",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "K",
          "highGrade": "5",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "Yes",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #646290459",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": [
            {
              "year": 2019,
              "rank": 737,
              "rankOf": 1000,
              "rankStars": 2,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 84.11,
              "averageStandardScore": 51.6
            },
            {
              "year": 2018,
              "rank": 195,
              "rankOf": 1000,
              "rankStars": 2,
              "rankLevel": "Elementary",
              "rankStatewidePercentage": 82.47,
              "averageStandardScore": 69.44
            }
          ],
          "rankMovement": -89,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 561,
              "percentFreeDiscLunch": 52.2,
              "percentofAfricanAmericanStudents": 53.34,
              "percentofAsianStudents": 78.45,
              "percentofHispanicStudents": 46.62,
              "percentofIndianStudents": 64.17,
              "percentofPacificIslanderStudents": 17.63,
              "percentofWhiteStudents": 49.04,
              "percentofTwoOrMoreRaceStudents": 92.47,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 41.9,
              "pupilTeacherRatio": 8.4,
              "numberofAfricanAmericanStudents": 80,
              "numberofAsianStudents": 71,
              "numberofHispanicStudents": 29,
              "numberofIndianStudents": 69,
              "numberofPacificIslanderStudents": 30,
              "numberofWhiteStudents": 70,
              "numberofTwoOrMoreRaceStudents": 98,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": true
        },
        {
          "schoolid": "483510009172",
          "schoolName": "School #803975477",
          "phone": "(555) 555-5555",
          "url": "https://www.schooldigger.com/(pathtoitem)",
          "urlCompare": "https://www.schooldigger.com/(pathtoitem)",
          "address": {
            "street": "123 Main St.",
            "city": "Anytown",
            "state": "CA",
            "stateFull": "California",
            "zip": "99999",
            "zip4": "9999",
            "cityURL": "https://www.schooldigger.com/go/CA/city/Anytown/search.aspx",
            "zipURL": "https://www.schooldigger.com/go/CA/zip/99999/search.aspx",
            "html": "123 Main St.<br />Anytown, CA 99999-9999"
          },
          "lowGrade": "PK",
          "highGrade": "PK",
          "schoolLevel": "Elementary",
          "isCharterSchool": "No",
          "isMagnetSchool": "No",
          "isVirtualSchool": "No",
          "isTitleISchool": "No",
          "isTitleISchoolwideSchool": "No",
          "district": {
            "districtID": "4835100",
            "districtName": "School District #1322989575",
            "url": "https://www.schooldigger.com/(pathtoitem)",
            "rankURL": "https://www.schooldigger.com/(pathtorank)"
          },
          "county": {
            "countyName": "AnyCounty",
            "countyURL": "https://www.schooldigger.com/go/CA/county/AnyCounty/search.aspx"
          },
          "rankHistory": null,
          "rankMovement": null,
          "schoolYearlyDetails": [
            {
              "year": 2019,
              "numberOfStudents": 870,
              "percentFreeDiscLunch": 69.69,
              "percentofAfricanAmericanStudents": 65.66,
              "percentofAsianStudents": 44.67,
              "percentofHispanicStudents": 4.48,
              "percentofIndianStudents": 6.62,
              "percentofPacificIslanderStudents": 25.7,
              "percentofWhiteStudents": 89.41,
              "percentofTwoOrMoreRaceStudents": 39.3,
              "percentofUnspecifiedRaceStudents": null,
              "teachersFulltime": 23.8,
              "pupilTeacherRatio": 19.2,
              "numberofAfricanAmericanStudents": 52,
              "numberofAsianStudents": 61,
              "numberofHispanicStudents": 58,
              "numberofIndianStudents": 21,
              "numberofPacificIslanderStudents": 84,
              "numberofWhiteStudents": 92,
              "numberofTwoOrMoreRaceStudents": 6,
              "numberofUnspecifiedRaceStudents": null
            }
          ],
          "isPrivate": false,
          "privateDays": null,
          "privateHours": null,
          "privateHasLibrary": null,
          "privateCoed": null,
          "privateOrientation": null,
          "hasBoundary": false
        }
      ]
    }
  








    
      console.log("schoolsList",results.schoolList)
      const schoolList = results.schoolList;
      this.state.schools.push(...schoolList);
       this.setState({isLoaded:true})  
        console.log("this.setState.school",this.state.schools)
 


    //   const city = this.state.city;
    //   const state = this.state.state;
    //   const url = `https://api.schooldigger.com/v1.2/schools?st=${state}&city=${city}&sortBy=rank&appID=${appId}&appKey=${apiKey}`;
    //   axios.headers={
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // }
    //   axios.get(url)
    //   .then(res => {
    //     const results = res.data;
    //     const schoolList = results.schoolList;        
    //     this.state.schools.push(...schoolList);
    //     this.setState({isLoaded:true})  
    //     console.log("this.setState.school",this.state.schools)
       
    //   })
    //   .catch(error => {
    //     console.log('there is an eror', error)
    //   })
   }
  render(){
    console.log(this.state.isLoaded)

      if(this.state.isLoaded===true){
        return(
      <div className="App">
          <div className="header">
              <Header/>
              <>
                <input type='text' className='input' name='city' placeholder='Plano' value={this.setState.city} onChange={this.handleCityChange}></input>
                <input type='text' className='input' name='state' placeholder='TX' value={this.setState.state} onChange={this.handleStateChange}></input>
                <Button variant="primary" type="submit" onClick={this.handleSearch}> Search</Button>
               <Router>  
                <nav> 
                <ul className="menu">
                  <li>
                  <Link  to={{ pathname: '/SchoolsList', state: {schoolList: this.state.schools } }} >My Schools List</Link>
                </li>
                <li>
                  <Link to="/SearchHistory">Search History</Link>
                </li>
                <li>
                  <Link to="/QuickLinks" >Resources</Link>
                </li>

                </ul>
                </nav>
                <Switch>
                  <Route exact path="/SearchHistory" component={BrowserHistory}>  
                  {this.props.children}

                </Route> 
                <Route exact path="/SchoolsList" component={SchoolsList}>  
                {this.props.children}

                </Route> 
                <Route exact path="/QuickLinks" component={QuickLinks}>          
                </Route>             

                </Switch>
                </Router>            
              </>
          </div>
          <div className="body">
              <Home data={this.state.schools} />
          </div>
          <div className="footer">
              <Footer/>
          </div>
        </div>
          )
          }
          else return (
              <div className="App">
                    <div className="header">
                       <Header/>
                          <>
                            <input type='text' className='input' name='city' placeholder='Plano' value={this.setState.city} onChange={this.handleCityChange}></input>
                            <input type='text' className='input' name='state' placeholder='TX' value={this.setState.state} onChange={this.handleStateChange}></input>
                            <Button variant="primary" type="submit" onClick={this.handleSearch}> Search</Button>
                            <Router>  
                              <nav> 
                                <ul className="menu">
                                  <li>
                                    <Link  to={{ pathname: '/SchoolsList', state:           {schoolList: this.state.schools } }} >My Schools List</Link>
                                </li>
                                <li>
                                    <Link to="/SearchHistory">Search History</Link>
                                </li>
                                <li>
                                    <Link to="/QuickLinks" >Resources</Link>
                                </li>
                                </ul>
                              </nav>
                            <Switch>
                                <Route exact path="/SearchHistory" component={BrowserHistory}>  
                                  {this.props.children}
                               </Route> 
                              <Route exact path="/SchoolsList" component={SchoolsList}>  
                                  {this.props.children}
                              </Route> 
                              <Route exact path="/QuickLinks" component={QuickLinks}>          
                            </Route>             
                          </Switch>
                      </Router> 
                  </>           
          </div>
          <div className="body">
          </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>

    );
  }
 
}

export default App;