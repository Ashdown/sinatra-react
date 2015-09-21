module EchoHelper

  def get_echo value
    echo_client.get_echo value
  end

  private

  def echo_client
    @echo_client ||= EchoClient.new()
  end
end