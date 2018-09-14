require "application_system_test_case"

class Ajax::DirectoriesTest < ApplicationSystemTestCase
  setup do
    @ajax_directory = ajax_directories(:one)
  end

  test "visiting the index" do
    visit ajax_directories_url
    assert_selector "h1", text: "Ajax/Directories"
  end

  test "creating a Directory" do
    visit ajax_directories_url
    click_on "New Ajax/Directory"

    click_on "Create Directory"

    assert_text "Directory was successfully created"
    click_on "Back"
  end

  test "updating a Directory" do
    visit ajax_directories_url
    click_on "Edit", match: :first

    click_on "Update Directory"

    assert_text "Directory was successfully updated"
    click_on "Back"
  end

  test "destroying a Directory" do
    visit ajax_directories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Directory was successfully destroyed"
  end
end
