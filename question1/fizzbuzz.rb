
def fizz_buzz(n)
    if n % 15 == 0
        'Fizz Buzz'
        elsif n % 3 == 0
        'Fizz'
        elsif n % 5 == 0
        'Buzz'
        else
        n.to_s
    end
end

def countup(m)
    x = 1
    while x < m
        if x == 1
            print fizz_buzz(x)
            else
            print ","
            print fizz_buzz(x)
        end
        x += 1
    end
    puts ""
end

puts "数字を入力してください"
num = gets.to_i
countup(num)

