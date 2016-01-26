using Microsoft.VisualStudio.TestTools.UnitTesting;
using BookStore.Api.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace BookStore.Api.Service.Tests
{
    [Binding]
    public class BookServiceTests
    {

 
        private IWebDriver _driver;

        [Given(@"I have started web browser")]
        public void GivenIHaveStartedBrowser()
        {
            _driver = new FirefoxDriver(new FirefoxBinary(@"C:\Program Files (x86)\Mozilla Firefox\firefox.exe"), new FirefoxProfile());
        }

        [Given(@"I navigated to application URL")]
        public void GivenINavigatedToApplicationPage()
        {
            _driver.Navigate().GoToUrl("localhost:9999");
        }

        [When(@"I click Get Budgets button")]
        public void WhenIClickGetBudgetsButton()
        {
            var button = _driver.FindElement(By.Id("getBudgetsBtn"));
            button.Click();
        }

        [AfterScenario]
        public void CloseApp()
        {
            _driver.Close();
        }
    }
}