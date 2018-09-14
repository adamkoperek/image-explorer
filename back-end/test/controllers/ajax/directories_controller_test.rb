require 'test_helper'

class Ajax::DirectoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ajax_directory = ajax_directories(:one)
  end

  test "should get index" do
    get ajax_directories_url
    assert_response :success
  end

  test "should get new" do
    get new_ajax_directory_url
    assert_response :success
  end

  test "should create ajax_directory" do
    assert_difference('Ajax::Directory.count') do
      post ajax_directories_url, params: { ajax_directory: {  } }
    end

    assert_redirected_to ajax_directory_url(Ajax::Directory.last)
  end

  test "should show ajax_directory" do
    get ajax_directory_url(@ajax_directory)
    assert_response :success
  end

  test "should get edit" do
    get edit_ajax_directory_url(@ajax_directory)
    assert_response :success
  end

  test "should update ajax_directory" do
    patch ajax_directory_url(@ajax_directory), params: { ajax_directory: {  } }
    assert_redirected_to ajax_directory_url(@ajax_directory)
  end

  test "should destroy ajax_directory" do
    assert_difference('Ajax::Directory.count', -1) do
      delete ajax_directory_url(@ajax_directory)
    end

    assert_redirected_to ajax_directories_url
  end
end
