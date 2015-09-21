module DateHelper

  def get_date
    date_client.get_date
  end

  private

  def date_client
    @date_client ||= DateClient.new()
  end
end