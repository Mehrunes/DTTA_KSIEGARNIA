Feature: MainWindow

Scenario: Application starts with no data loaded
	Given I have started web browser
		And I navigated to application URL
	Then Budget list is empty